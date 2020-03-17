import UIKit
import React
import Foundation

class ViewController: UIViewController {
    
    @IBOutlet weak var textField: UITextField!
    
    @IBAction func btnGoReactView(_ sender: Any) {
        
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
        let messageFromNative: String = textField.text!
        let rootView = RCTRootView(bundleURL: jsCodeLocation!, moduleName: "DemoIntegrateRN", initialProperties: [
            "message_from_native": messageFromNative], launchOptions: nil)

        let vc = UIViewController()
        vc.view = rootView
        vc.modalPresentationStyle = .fullScreen
        present(vc, animated: true)
        // dismiss(animated: true, completion: nil)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
}
