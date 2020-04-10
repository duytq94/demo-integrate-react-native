package com.example.demointegratern

import android.content.Intent
import android.util.Log
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class TestConnectNativeModule internal constructor(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "TestConnectNative"
    }

    @ReactMethod
    fun sendMessageToNative(rnMessage: String?) {
        Log.d("This log is from java", rnMessage)
    }

    @ReactMethod
    fun sendCallbackToNative(rnCallback: Callback) {
        rnCallback.invoke("A greeting from java")
    }

    @ReactMethod
    fun finishActivity() {
        if (currentActivity != null) {
            currentActivity!!.finish()
        }
    }

    @ReactMethod
    fun goToSecondActivity() {
        if (currentActivity != null) {
            val intent = Intent(currentActivity, SecondActivity::class.java)
            currentActivity!!.startActivity(intent)
        }
    }

    companion object

}