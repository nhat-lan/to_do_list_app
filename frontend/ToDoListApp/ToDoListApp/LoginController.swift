//
//  LoginController.swift
//  ToDoListApp
//
//  Created by Nhat Lan Le tu on 1/20/20.
//  Copyright © 2020 Nhat Lan Le tu. All rights reserved.
//

import Foundation

import UIKit

class LoginController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    @IBOutlet weak var usernameTextField: UITextField!
    
    @IBOutlet weak var passwordTextField: UITextField!
    
    @IBOutlet weak var signinButton: UIButton!
    
    @IBAction func singinButtonAction(_ sender: UIButton) {
        // check in database
        let passText = self.passwordTextField.text
        let get = Api(path: "accounts/" + self.usernameTextField.text!, apiMethod: "GET", body: [:])
        _ = get.apiCall(callback: { data in

            if (data == nil) {
                DispatchQueue.main.async {
                    self.alert(controllerTitle: "User doesn't exist", message: "Check username")
                }
            } else if (String(describing: data!["password"]!) != passText) {
                DispatchQueue.main.async {
                    self.alert(controllerTitle: "Wrong credentials", message: "Username and password doesn't match")
                }
            } else {
                DispatchQueue.main.async {
                    let storyboard : UIStoryboard = UIStoryboard(name: "Main", bundle: nil)

                    let nextView = storyboard.instantiateViewController(withIdentifier: "welcome") as! ViewController

                    self.navigationController?.pushViewController(nextView, animated:true)
                }
            }
        })
    }
    
    func alert(controllerTitle: String, message: String) {

        let alertController = UIAlertController(title: controllerTitle, message: message, preferredStyle: .alert)
        
        let alertAction = UIAlertAction(title: "OK", style: .cancel, handler: nil)
        
        alertController.addAction(alertAction)
        
        self.present(alertController, animated: true, completion: nil)
    }
}
