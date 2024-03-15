#import "SplashViewController.h"
#import <FLAnimatedImage/FLAnimatedImage.h>

@implementation SplashViewController

- (void)viewDidLoad {
    [super viewDidLoad];

    // GIF 이미지 뷰 설정
    FLAnimatedImageView *animatedImageView = [[FLAnimatedImageView alloc] init];
    animatedImageView.contentMode = UIViewContentModeScaleAspectFill;
    animatedImageView.frame = self.view.bounds;
    [self.view addSubview:animatedImageView];

    // 프로젝트의 Resources 폴더에서 GIF 파일 로드
    NSString *filePath = [[NSBundle mainBundle] pathForResource:@"launch_screen" ofType:@"gif"];
    NSData *gifData = [NSData dataWithContentsOfFile:filePath];
    FLAnimatedImage *animatedImage = [FLAnimatedImage animatedImageWithGIFData:gifData];
    animatedImageView.animatedImage = animatedImage;

    // GIF 재생이 끝난 후 메인 화면으로 전환
    [NSTimer scheduledTimerWithTimeInterval:3.0 target:self selector:@selector(goToMainScreen) userInfo:nil repeats:NO];
}

// 메인 화면으로 전환하는 메서드 구현
- (void)goToMainScreen {
    // 앱의 메인 스토리보드에서 MainViewController 인스턴스를 가져옵니다.
    UIStoryboard *storyboard = [UIStoryboard storyboardWithName:@"Main" bundle:nil]; // 'Main'이 앱의 메인 스토리보드 파일명이라고 가정합니다.
    UIViewController *mainVC = [storyboard instantiateViewControllerWithIdentifier:@"MainViewControllerID"]; // 'MainViewControllerID'는 메인 뷰 컨트롤러의 스토리보드 ID입니다.

    // 메인 뷰 컨트롤러로 전환합니다.
    mainVC.modalPresentationStyle = UIModalPresentationFullScreen; // iOS 13 이상에서 전체 화면을 보장합니다.
    [self presentViewController:mainVC animated:YES completion:nil];
}

@end
