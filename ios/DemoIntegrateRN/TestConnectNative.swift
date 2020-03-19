@objc(TestConnectNativeModule)
class TestConnectNativeModule: NSObject {
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return true
    }

    @objc
    func sendMessageToNative(_ rnMessage: String) {
        print("This log is from swift: \(rnMessage)")
    }

    @objc
    func sendCallbackToNative(_ rnCallback: RCTResponseSenderBlock) {
      rnCallback(["A greeting from swift"])
    }
}
