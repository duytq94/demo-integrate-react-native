import UIKit
import React
import Foundation

class ViewController: UIViewController {
    
    @IBOutlet weak var textField: UITextField!
    
    @IBAction func btnGoReactView(_ sender: Any) {
        
        let messageFromNative: String = textField.text!
        
//        We'll don't init RCTRootView through bundleURL but by bridge for using dismiss
//        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
//        let rootView = RCTRootView(
//            bundleURL: jsCodeLocation!,
//            moduleName: "DemoIntegrateRN",
//            initialProperties: ["message_from_native": messageFromNative],
//            launchOptions: nil)
        
        let rootView = RNViewManager.sharedInstance.viewForModule(
        "DemoIntegrateRN",
        initialProperties: ["message_from_native": messageFromNative])

        let vc = UIViewController()
        vc.view = rootView
        vc.modalPresentationStyle = .fullScreen
        present(vc, animated: true)
        
    }
}
