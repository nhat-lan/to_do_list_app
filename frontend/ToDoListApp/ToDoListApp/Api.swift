//
//  Api.swift
//  ToDoListApp
//
//  Created by Nhat Lan Le tu on 1/20/20.
//  Copyright © 2020 Nhat Lan Le tu. All rights reserved.
//

import Foundation

class Api {
    var apiMethod: String
    var body: Dictionary<String, String>
    var path: String
    
    init(path: String, apiMethod: String, body: Dictionary<String, String>) {
        self.path = path
        self.apiMethod = apiMethod
        self.body = body
    }
    
    func apiCall(callback: @escaping (Dictionary<String, AnyObject>?)->()) {
        
        let url = "http://to-do-list-app-4261.herokuapp.com/" + self.path

        var request = URLRequest(url: URL(string: url)!)
        request.httpMethod = self.apiMethod
        if self.apiMethod != "GET" {
            request.httpBody = try? JSONSerialization.data(withJSONObject: self.body, options: [])
        }
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")

        let session = URLSession.shared
        let task = session.dataTask(with: request, completionHandler: { data, response, error -> Void in
            print(response!)
            do {
                let json = try JSONSerialization.jsonObject(with: data!) as! Dictionary<String, AnyObject>
                print(json)
                callback(json)
            } catch {
                print("error")
                callback(nil)
            }
        })

        task.resume()
    }
    
    func apiCall() {
        
        let url = "http://to-do-list-app-4261.herokuapp.com/" + self.path

        var request = URLRequest(url: URL(string: url)!)
        request.httpMethod = self.apiMethod
        if self.apiMethod != "GET" {
            request.httpBody = try? JSONSerialization.data(withJSONObject: self.body, options: [])
        }
        request.addValue("application/json", forHTTPHeaderField: "Content-Type")

        let session = URLSession.shared
        let task = session.dataTask(with: request, completionHandler: { data, response, error -> Void in
            print(response!)
            do {
                let json = try JSONSerialization.jsonObject(with: data!) as! Dictionary<String, AnyObject>
                print(json)
            } catch {
                print("error")
            }
        })

        task.resume()
    }
}
