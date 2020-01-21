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
        self.apiCall()
    }
    
    func apiCall() {
        
        let url = "http://localhost:10000/" + self.path

        var request = URLRequest(url: URL(string: url)!)
        request.httpMethod = self.apiMethod
        request.httpBody = try? JSONSerialization.data(withJSONObject: self.body, options: [])
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
