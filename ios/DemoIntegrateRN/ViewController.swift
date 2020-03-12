import UIKit
import React

class ViewController: UIViewController {
        
    @IBAction func btnGoReactView(_ sender: Any) {
        
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")

        let rootView = RCTRootView(bundleURL: jsCodeLocation!, moduleName: "DemoIntegrateRN", initialProperties: nil, launchOptions: nil)

        let vc = UIViewController()
        vc.view = rootView
        vc.modalPresentationStyle = .fullScreen
        present(vc, animated: true)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }


}

