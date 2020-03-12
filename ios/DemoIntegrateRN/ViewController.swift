import UIKit
import React

class ViewController: UIViewController {
    
    @IBOutlet weak var lbl: UILabel!
    
    @IBAction func btnGoReactView(_ sender: Any) {
        lbl.text = "aaaaaa"
        
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

