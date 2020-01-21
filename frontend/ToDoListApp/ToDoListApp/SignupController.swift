//
//  SignupController.swift
//  ToDoListApp
//
//  Created by Nhat Lan Le tu on 1/20/20.
//  Copyright © 2020 Nhat Lan Le tu. All rights reserved.
//

import Foundation

import UIKit

class SignupController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }
    
    
    @IBOutlet weak var nameTextField: UITextField!
    

    @IBOutlet weak var usernameTextField: UITextField!
    
    
    @IBOutlet weak var emailTextField: UITextField!
    
    
    @IBOutlet weak var passwordTextField: UITextField!
    
    
    @IBOutlet weak var confirmPasswordTextField: UITextField!
    
    @IBOutlet weak var signupButton: UIButton!
    
    
    @IBAction func signupAction(_ sender: UIButton) {
        
        if usernameTextField.text!.isEmpty {
            alert(controllerTitle: "Username Error", message: "Please provide username")
        } else if nameTextField.text!.isEmpty {
            alert(controllerTitle: "Name Error", message: "Please provide name")
        } else if emailTextField.text!.isEmpty {
            alert(controllerTitle: "Email Error", message: "Please provide email")
        } else if passwordTextField.text!.isEmpty {
            alert(controllerTitle: "Password Error", message: "Please provide password")
        }
        if passwordTextField.text != confirmPasswordTextField.text {
            
            alert(controllerTitle: "Password Error", message: "Password confirmation doesn't match")
        }
    }
    
    func alert(controllerTitle: String, message: String) {

        let alertController = UIAlertController(title: controllerTitle, message: message, preferredStyle: .alert)
        
        let alertAction = UIAlertAction(title: "OK", style: .cancel, handler: nil)
        
        alertController.addAction(alertAction)
        
        self.present(alertController, animated: true, completion: nil)
    }
}
