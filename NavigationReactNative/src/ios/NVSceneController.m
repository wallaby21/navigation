#import "NVSceneController.h"
#import "NVSearchBarView.h"

@implementation NVSceneController
{
    UIView *_view;
    CGRect _lastViewFrame;
}

- (id)initWithScene:(UIView *)view
{
    if (self = [super init]) {
        _view = view;
    }
    return self;
}

- (void)loadView
{
    [super loadView];
    self.view = _view;
}

- (void)viewDidLoad
{
    [super viewDidLoad];
    NVSearchBarView *searchBar = (NVSearchBarView *) [self.view viewWithTag:SEARCH_BAR];
    if (!!searchBar)
    {
        [self.navigationItem setSearchController:searchBar.searchController];
        [self.navigationItem setHidesSearchBarWhenScrolling:searchBar.hideWhenScrolling];
        self.definesPresentationContext = true;
    }
}

- (void)viewDidLayoutSubviews
{
    [super viewDidLayoutSubviews];
    if (self.boundsDidChangeBlock && !CGRectEqualToRect(_lastViewFrame, self.view.frame)) {
        self.boundsDidChangeBlock(self);
        _lastViewFrame = self.view.frame;
    }
}

@end
