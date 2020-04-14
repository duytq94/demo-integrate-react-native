import UIKit
import React
import Foundation

class ViewController: UIViewController {
    @IBOutlet weak var textField: UITextField!
    
    @IBAction func BtnGoReactView(_ sender: Any) {
        let messageFromNative: String = textField.text!
        
        //        We'll don't init RCTRootView through bundleURL but by bridge for using dismiss later
        //        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
        //        let rootView = RCTRootView(
        //            bundleURL: jsCodeLocation!,
        //            moduleName: "DemoIntegrateRN",
        //            initialProperties: ["message_from_native": messageFromNative],
        //            launchOptions: nil)
        
        let rootView = RNViewManager.sharedInstance.viewForModule(
            "DemoIntegrateRN",
            initialProperties: ["message_from_native": messageFromNative])
        
        let reactNativeVC = UIViewController()
        reactNativeVC.view = rootView
        reactNativeVC.modalPresentationStyle = .fullScreen
        present(reactNativeVC, animated: true)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.hideKeyboardWhenTappedAround()
    }
    
    func hideKeyboardWhenTappedAround() {
        let tap = UITapGestureRecognizer(target: self.view, action: #selector(UIView.endEditing))
        tap.cancelsTouchesInView = false
        view.addGestureRecognizer(tap)
    }
}
