import * as assert from 'assert';
import * as mocha from 'mocha';
import { StateNavigator } from '../../Navigation/src/Navigation';
import { RefreshLink } from '../src/NavigationReact';
import * as React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';

configure({ adapter: new Adapter() });
var { window } = new JSDOM('<!doctype html><html><body></body></html>');
window.addEventListener = () => {};
(global as any).window = window;
(global as any).document = window.document;

describe('RefreshLinkTest', function () {
    describe('Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s');
            stateNavigator.navigate('s');
            var wrapper = mount(
                <RefreshLink
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Context Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s');
            var wrapper = mount(
                <RefreshLink>
                    link text
                </RefreshLink>,
                {
                    context: { stateNavigator: stateNavigator },
                    childContextTypes: { stateNavigator: () => {}}
                }
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Without State Navigator Refresh Link', function () {
        it('should render', function(){
            var wrapper = mount(
                <RefreshLink>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Invalid Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            var wrapper = mount(
                <RefreshLink
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Attributes Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s');
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a'}}
                    includeCurrentData={true}
                    currentDataKeys="y"
                    activeCssClass="active"
                    disableActive={true}
                    acrossCrumbs={false}
                    historyAction='replace'
                    navigating={() => false}
                    aria-label="z"
                    target="_blank"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=a');
            assert.equal(link.prop('children'), 'link text');
            assert.notEqual(link.prop('onClick'), null);
            assert.equal(link.prop('aria-label'), 'z');
            assert.equal(link.prop('target'), '_blank');
            assert.equal(Object.keys(link.props()).length, 5);
        })
    });

    describe('Navigation Data Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s');
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a'}}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=a');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Include Current Data Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s', {y: 'b', z: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a'}}
                    includeCurrentData={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?y=b&z=c&x=a');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Include Current Data Override Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s', {y: 'b', z: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{y: 'a'}}
                    includeCurrentData={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?y=a&z=c');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Current Data Key Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s', {y: 'b', z: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a'}}
                    currentDataKeys="y"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?y=b&x=a');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Current Data Keys Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s', {y: 'b', z: 'c', w: 'd'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a'}}
                    currentDataKeys="y,z"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?y=b&z=c&x=a');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Current Data Keys Override Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s', {y: 'b', z: 'c', w: 'd'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{y: 'a'}}
                    currentDataKeys="y,z"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?y=a&z=c');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Active Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s', {x: 'a', y: 'b', z: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a', z: 'c'}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=a&z=c');
            assert.equal(link.prop('className'), 'active');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Inactive Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s', {x: 'a', y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'b'}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=b');
            assert.equal(link.prop('className'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Disable Active Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s', {x: 'a', y: 'b', z: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a', z: 'c'}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Disable Inactive Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s', {x: 'a', y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'b'}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=b');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Null Active Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s', {x: 'a', y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a', y: null}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=a');
            assert.equal(link.prop('className'), 'active');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Undefined Active Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s', {x: 'a', y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a', y: undefined}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=a');
            assert.equal(link.prop('className'), 'active');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Empty String Inactive Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s', {x: 'a', y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a', y: ''}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=a');
            assert.equal(link.prop('className'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Null Disable Active Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s', {x: 'a', y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a', y: null}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Undefined Disable Active Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s', {x: 'a', y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a', y: undefined}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Empty String Disable Inactive Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s', {x: 'a', y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a', y: ''}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=a');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Active Number Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'number'} }
            ]);
            stateNavigator.navigate('s', {x: 1, y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 1}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=1');
            assert.equal(link.prop('className'), 'active');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Inactive Number Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'number'} }
            ]);
            stateNavigator.navigate('s', {x: 1, y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 2}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=2');
            assert.equal(link.prop('className'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Active Boolean Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'boolean'} }
            ]);
            stateNavigator.navigate('s', {x: true, y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: true}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=true');
            assert.equal(link.prop('className'), 'active');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Inactive Boolean Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'boolean'} }
            ]);
            stateNavigator.navigate('s', {x: true, y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: false}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=false');
            assert.equal(link.prop('className'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Active Date Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'date'} }
            ]);
            stateNavigator.navigate('s', {x: new Date(2011, 1, 3), y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: new Date(2011, 1, 3)}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=2011-02-03');
            assert.equal(link.prop('className'), 'active');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Inactive Date Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'date'} }
            ]);
            stateNavigator.navigate('s', {x: new Date(2011, 1, 3), y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: new Date(2010, 1, 3)}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=2010-02-03');
            assert.equal(link.prop('className'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Disable Active Number Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'number'} }
            ]);
            stateNavigator.navigate('s', {x: 1, y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 1}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Disable Inactive Number Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'number'} }
            ]);
            stateNavigator.navigate('s', {x: 1, y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 2}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=2');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Disable Active Boolean Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'boolean'} }
            ]);
            stateNavigator.navigate('s', {x: true, y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: true}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Disable Inactive Boolean Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'boolean'} }
            ]);
            stateNavigator.navigate('s', {x: true, y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: false}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=false');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Disable Active Date Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'date'} }
            ]);
            stateNavigator.navigate('s', {x: new Date(2011, 1, 3), y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: new Date(2011, 1, 3)}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Disable Inactive Date Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'date'} }
            ]);
            stateNavigator.navigate('s', {x: new Date(2011, 1, 3), y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: new Date(2010, 1, 3)}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=2010-02-03');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Inactive Type Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'number'} }
            ]);
            stateNavigator.navigate('s', {x: '1', y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 1}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=1');
            assert.equal(link.prop('className'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Disable Inactive Type Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'number'} }
            ]);
            stateNavigator.navigate('s', {x: '1', y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 1}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=1');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Active Array Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'stringarray'} }
            ]);
            stateNavigator.navigate('s', {x: ['a', 'b'], y: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: ['a', 'b']}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=a&x=b');
            assert.equal(link.prop('className'), 'active');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Inactive Array Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'stringarray'} }
            ]);
            stateNavigator.navigate('s', {x: ['a', 'b'], y: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: ['a', 'd']}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=a&x=d');
            assert.equal(link.prop('className'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Active Number Array Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'numberarray'} }
            ]);
            stateNavigator.navigate('s', {x: [1, 2], y: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: [1, 2]}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=1&x=2');
            assert.equal(link.prop('className'), 'active');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Inactive Number Array Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'numberarray'} }
            ]);
            stateNavigator.navigate('s', {x: [1, 2], y: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: [1, 3]}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=1&x=3');
            assert.equal(link.prop('className'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Active Boolean Array Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'booleanarray'} }
            ]);
            stateNavigator.navigate('s', {x: [true, false], y: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: [true, false]}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=true&x=false');
            assert.equal(link.prop('className'), 'active');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Inactive Boolean Array Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'booleanarray'} }
            ]);
            stateNavigator.navigate('s', {x: [true, false], y: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: [true, true]}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=true&x=true');
            assert.equal(link.prop('className'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });


    describe('Active Date Array Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'datearray'} }
            ]);
            stateNavigator.navigate('s', {x: [new Date(2011, 1, 3), new Date(2012, 2, 4)], y: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: [new Date(2011, 1, 3), new Date(2012, 2, 4)]}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=2011-02-03&x=2012-03-04');
            assert.equal(link.prop('className'), 'active');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Inactive Date Array Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'datearray'} }
            ]);
            stateNavigator.navigate('s', {x: [new Date(2011, 1, 3), new Date(2012, 2, 4)], y: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: [new Date(2011, 1, 3), new Date(2010, 2, 4)]}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=2011-02-03&x=2010-03-04');
            assert.equal(link.prop('className'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Disable Active Array Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'stringarray'} }
            ]);
            stateNavigator.navigate('s', {x: ['a', 'b'], y: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: ['a', 'b']}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Disable Inactive Array Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'stringarray'} }
            ]);
            stateNavigator.navigate('s', {x: ['a', 'b'], y: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: ['a', 'd']}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=a&x=d');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Disable Active Number Array Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'numberarray'} }
            ]);
            stateNavigator.navigate('s', {x: [1, 2], y: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: [1, 2]}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Disable Inactive Number Array Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'numberarray'} }
            ]);
            stateNavigator.navigate('s', {x: [1, 2], y: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: [1, 3]}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=1&x=3');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Disable Active Boolean Array Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'booleanarray'} }
            ]);
            stateNavigator.navigate('s', {x: [true, false], y: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: [true, false]}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Disable Inactive Boolean Array Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'booleanarray'} }
            ]);
            stateNavigator.navigate('s', {x: [true, false], y: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: [true, true]}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=true&x=true');
            assert.equal(link.prop('children'), 'link text');
        })
    });


    describe('Disable Active Date Array Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'datearray'} }
            ]);
            stateNavigator.navigate('s', {x: [new Date(2011, 1, 3), new Date(2012, 2, 4)], y: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: [new Date(2011, 1, 3), new Date(2012, 2, 4)]}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Disable Inactive Date Array Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'datearray'} }
            ]);
            stateNavigator.navigate('s', {x: [new Date(2011, 1, 3), new Date(2012, 2, 4)], y: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: [new Date(2011, 1, 3), new Date(2010, 2, 4)]}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=2011-02-03&x=2010-03-04');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Inactive Array Length Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'stringarray'} }
            ]);
            stateNavigator.navigate('s', {x: ['a', 'b'], y: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: ['a', 'b', 'c']}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=a&x=b&x=c');
            assert.equal(link.prop('className'), null);
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Disable Inactive Array Length Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r', defaultTypes: {x: 'stringarray'} }
            ]);
            stateNavigator.navigate('s', {x: ['a', 'b'], y: 'c'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: ['a', 'b', 'c']}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=a&x=b&x=c');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Active Add Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s', {x: 'a', y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a'}}
                    activeCssClass="active"
                    className="link"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=a');
            assert.equal(link.prop('className'), 'link active');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Inactive Add Css Class Refresh Link', function () {
        it('should render', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s', {x: 'a', y: 'b'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'c'}}
                    activeCssClass="active"
                    className="link"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r?x=c');
            assert.equal(link.prop('className'), 'link');
            assert.equal(link.prop('children'), 'link text');
        })
    });

    describe('Click Refresh Link', function () {
        it('should navigate', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s');
            var wrapper = mount(
                <RefreshLink
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            link.simulate('click');
            assert.equal(stateNavigator.stateContext.oldState, stateNavigator.states['s']);
        })
    });

    describe('Ctrl + Click Refresh Link', function () {
        it('should not navigate', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s');
            var wrapper = mount(
                <RefreshLink
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            link.simulate('click', { ctrlKey: true });
            assert.equal(stateNavigator.stateContext.oldState, null);
        })
    });

    describe('Shift + Click Refresh Link', function () {
        it('should not navigate', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s');
            var wrapper = mount(
                <RefreshLink
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            link.simulate('click', { shiftKey: true });
            assert.equal(stateNavigator.stateContext.oldState, null);
        })
    });

    describe('Meta + Click Refresh Link', function () {
        it('should not navigate', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s');
            var wrapper = mount(
                <RefreshLink
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            link.simulate('click', { metaKey: true });
            assert.equal(stateNavigator.stateContext.oldState, null);
        })
    });

    describe('Alt + Click Refresh Link', function () {
        it('should not navigate', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s');
            var wrapper = mount(
                <RefreshLink
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            link.simulate('click', { altKey: true });
            assert.equal(stateNavigator.stateContext.oldState, null);
        })
    });

    describe('Button + Click Refresh Link', function () {
        it('should not navigate', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s');
            var wrapper = mount(
                <RefreshLink
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            link.simulate('click', { button: true });
            assert.equal(stateNavigator.stateContext.oldState, null);
        })
    });

    describe('Navigating Click Refresh Link', function () {
        it('should navigate', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s');
            var wrapper = mount(
                <RefreshLink
                    navigating={() => true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            link.simulate('click');
            assert.equal(stateNavigator.stateContext.oldState, stateNavigator.states['s']);
        })
    });

    describe('Not Navigating Click Refresh Link', function () {
        it('should not navigate', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s');
            var wrapper = mount(
                <RefreshLink
                    navigating={() => false}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            link.simulate('click');
            assert.equal(stateNavigator.stateContext.oldState, null);
        })
    });

    describe('Navigating Params Click Refresh Link', function () {
        it('should navigate', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s');
            var navigatingEvt, navigatingLink;
            var wrapper = mount(
                <RefreshLink
                    navigating={(e, link) => {
                        navigatingEvt = e;
                        navigatingLink = link;
                        return true;
                    }}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            link.simulate('click', { hello: 'world' });
            assert.strictEqual(navigatingEvt.hello, 'world');
            assert.equal(navigatingLink, '/r');
        })
    });

    describe('History Click Refresh Link', function () {
        it('should navigate', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s');
            var wrapper = mount(
                <RefreshLink
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            var addHistory;
            stateNavigator.historyManager.addHistory = (url, replace) => { addHistory = !replace };
            link.simulate('click');
            assert.strictEqual(addHistory, true);
        })
    });

    describe('Replace History Click Refresh Link', function () {
        it('should navigate', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s');
            var wrapper = mount(
                <RefreshLink
                    historyAction="replace"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            var replaceHistory;
            stateNavigator.historyManager.addHistory = (url, replace) => { replaceHistory = replace };
            link.simulate('click');
            assert.strictEqual(replaceHistory, true);
        })
    });

    describe('None History Click Refresh Link', function () {
        it('should navigate', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.navigate('s');
            var wrapper = mount(
                <RefreshLink
                    historyAction="none"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            var noneHistory = true;
            stateNavigator.historyManager.addHistory = () => { noneHistory = false };
            link.simulate('click');
            assert.strictEqual(noneHistory, true);
        })
    });

    describe('Navigate Refresh Link', function () {
        it('should update', function(){
            var stateNavigator = new StateNavigator([
                { key: 's0', route: 'r0' },
                { key: 's1', route: 'r1' }
            ]);
            stateNavigator.navigate('s0');
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a'}}
                    includeCurrentData={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r0?x=a');
            stateNavigator.navigate('s1', {y: 'b'});
            wrapper.update();
            link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r1?y=b&x=a');
        })
    });

    describe('Context Navigate Refresh Link', function () {
        it('should update', function(){
            var stateNavigator = new StateNavigator([
                { key: 's0', route: 'r0' },
                { key: 's1', route: 'r1' }
            ]);
            stateNavigator.navigate('s0');
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a'}}
                    includeCurrentData={true}>
                    link text
                </RefreshLink>,
                {
                    context: { stateNavigator: stateNavigator },
                    childContextTypes: { stateNavigator: () => {}}
                }
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r0?x=a');
            stateNavigator.navigate('s1', {y: 'b'});
            wrapper.update();
            link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r1?y=b&x=a');
        })
    });

    describe('Crumb Trail Navigate Refresh Link', function () {
        it('should not update', function(){
            var stateNavigator = new StateNavigator([
                { key: 's0', route: 'r0' },
                { key: 's1', route: 'r1', trackCrumbTrail: true }
            ]);
            stateNavigator.navigate('s0');
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a'}}
                    includeCurrentData={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r0?x=a');
            stateNavigator.navigate('s1', {y: 'b'});
            wrapper.update();
            link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r0?x=a');
        })
    });

    describe('Across Crumbs Crumb Trail Navigate Refresh Link', function () {
        it('should update', function(){
            var stateNavigator = new StateNavigator([
                { key: 's0', route: 'r0' },
                { key: 's1', route: 'r1', trackCrumbTrail: true }
            ]);
            stateNavigator.navigate('s0');
            var wrapper = mount(
                <RefreshLink
                    acrossCrumbs={true}
                    navigationData={{x: 'a'}}
                    includeCurrentData={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r0?x=a');
            stateNavigator.navigate('s1', {y: 'b'});
            wrapper.update();
            link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r1?y=b&x=a&crumb=%2Fr0&crumb=%2Fr1%3Fy%3Db');
        })
    });

    describe('Active Css Class Navigate Refresh Link', function () {
        it('should not update', function(){
            var stateNavigator = new StateNavigator([
                { key: 's0', route: 'r0' },
                { key: 's1', route: 'r1', trackCrumbTrail: true }
            ]);
            stateNavigator.navigate('s0', {x: 'a'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a'}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('className'), 'active');
            stateNavigator.navigate('s1');
            wrapper.update();
            link = wrapper.find('a');
            assert.equal(link.prop('className'), 'active');
        })
    });

    describe('Across Crumbs Active Css Class Navigate Refresh Link', function () {
        it('should not update', function(){
            var stateNavigator = new StateNavigator([
                { key: 's0', route: 'r0' },
                { key: 's1', route: 'r1', trackCrumbTrail: true }
            ]);
            stateNavigator.navigate('s0', {x: 'a'});
            var wrapper = mount(
                <RefreshLink
                    acrossCrumbs={true}
                    navigationData={{x: 'a'}}
                    activeCssClass="active"
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('className'), 'active');
            stateNavigator.navigate('s1');
            wrapper.update();
            link = wrapper.find('a');
            assert.equal(link.prop('className'), null);
        })
    });

    describe('Disable Active Navigate Refresh Link', function () {
        it('should not update', function(){
            var stateNavigator = new StateNavigator([
                { key: 's0', route: 'r0' },
                { key: 's1', route: 'r1', trackCrumbTrail: true }
            ]);
            stateNavigator.navigate('s0', {x: 'a'});
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a'}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), null);
            stateNavigator.navigate('s1');
            wrapper.update();
            link = wrapper.find('a');
            assert.equal(link.prop('href'), null);
        })
    });

    describe('Across Crumbs Disable Active Navigate Refresh Link', function () {
        it('should not update', function(){
            var stateNavigator = new StateNavigator([
                { key: 's0', route: 'r0' },
                { key: 's1', route: 'r1', trackCrumbTrail: true }
            ]);
            stateNavigator.navigate('s0', {x: 'a'});
            var wrapper = mount(
                <RefreshLink
                    acrossCrumbs={true}
                    navigationData={{x: 'a'}}
                    disableActive={true}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), null);
            stateNavigator.navigate('s1');
            wrapper.update();
            link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/r1?x=a&crumb=%2Fr0%3Fx%3Da&crumb=%2Fr1');
        })
    });

    describe('Click Custom Href Refresh Link', function () {
        it('should navigate', function(){
            var stateNavigator = new StateNavigator([
                { key: 's', route: 'r' }
            ]);
            stateNavigator.historyManager.getHref = () => '#/hello/world';
            stateNavigator.navigate('s');
            var wrapper = mount(
                <RefreshLink
                    navigationData={{x: 'a'}}
                    stateNavigator={stateNavigator}>
                    link text
                </RefreshLink>
            );
            var link = wrapper.find('a');
            assert.equal(link.prop('href'), '#/hello/world');
            link.simulate('click');
            assert.equal(stateNavigator.stateContext.state, stateNavigator.states['s']);
            assert.equal(stateNavigator.stateContext.data.x, 'a');
        })
    });
});