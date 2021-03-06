package com.navigation.reactnative;

import android.view.View;

import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

import javax.annotation.Nonnull;

public class TabBarItemManager extends ViewGroupManager<TabBarItemView> {

    @Nonnull
    @Override
    public String getName() {
        return "NVTabBarItem";
    }

    @ReactProp(name = "title")
    public void setTitle(TabBarItemView view, String title) {
        view.setTitle(title);
    }

    @ReactProp(name = "image")
    public void setImage(TabBarItemView view, @Nullable ReadableMap icon) {
        view.setIconSource(icon);
    }

    @Nonnull
    @Override
    protected TabBarItemView createViewInstance(@Nonnull ThemedReactContext reactContext) {
        return new TabBarItemView(reactContext);
    }

    @Override
    public Map<String, Object> getExportedCustomDirectEventTypeConstants() {
        return MapBuilder.<String, Object>builder()
                .put("onPress", MapBuilder.of("registrationName", "onPress"))
                .build();
    }

    @Override
    public void addView(TabBarItemView parent, View child, int index) {
        parent.content.add(index, child);
    }

    @Override
    public void removeView(TabBarItemView parent, View view) {
        parent.content.remove(view);
    }
}

