import Foundation
import React

class RNViewManager: NSObject {
    var bridge: RCTBridge?
    
    static let sharedInstance = RNViewManager()
    
    func createBridgeIfNeeded() -> RCTBridge {
        if bridge == nil {
            bridge = RCTBridge.init(delegate: self, launchOptions: nil)
        }
        return bridge!
    }
    
    func viewForModule(_ moduleName: String, initialProperties: [String : Any]?) -> RCTRootView {
        let viewBridge = createBridgeIfNeeded()
        let rootView: RCTRootView = RCTRootView(
            bridge: viewBridge,
            moduleName: moduleName,
            initialProperties: initialProperties)
        return rootView
    }
}

extension RNViewManager: RCTBridgeDelegate {
    func sourceURL(for bridge: RCTBridge!) -> URL! {
        // Debug
//        return URL(string: "http://localhost:8081/index.bundle?platform=ios")
        // Release
        return Bundle.main.url(forResource: "main", withExtension: "jsbundle")
    }
}
