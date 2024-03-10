package com.metrobuddyapp

import android.os.Bundle
import android.util.Log
import com.facebook.react.ReactActivity
import org.devio.rn.splashscreen.SplashScreen
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */

  override fun onCreate(savedInstanceState: Bundle?) {
      Log.d("SplashScreen", "onCreate 시작") // onCreate 메서드 시작 로그

      try {
          SplashScreen.show(this) // 스플래시 화면을 시도합니다.
          Log.d("SplashScreen", "SplashScreen.show 호출 성공")
      } catch (e: Exception) {
          Log.e("SplashScreen", "SplashScreen.show 호출 실패", e)
      }

      super.onCreate(savedInstanceState)
  }

  override fun getMainComponentName(): String = "MetroBuddyApp"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
