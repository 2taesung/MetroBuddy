#import "AppDelegate.h"
#import <React/RCTBundleURLProvider.h>
#import "SplashViewController.h" // SplashViewController를 임포트합니다.
#import <React/RCTBridge.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  // React Native의 루트 뷰 설정
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                            moduleName:@"MetroBuddyApp"
                                            initialProperties:nil];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  
  // SplashViewController를 초기 화면으로 설정합니다.
  SplashViewController *splashVC = [[SplashViewController alloc] init];
  
  // SplashViewController를 루트 뷰 컨트롤러로 설정하고,
  // 메인 화면(rootViewController)를 자식 뷰 컨트롤러로 추가합니다.
  [splashVC addChildViewController:rootViewController];
  [splashVC.view addSubview:rootViewController.view];
  rootViewController.view.frame = splashVC.view.bounds;
  [rootViewController didMoveToParentViewController:splashVC];
  
  self.window.rootViewController = splashVC;
  [self.window makeKeyAndVisible];

  return YES;
}

// React Native 구성을 위한 메서드
- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
