
```
curl -v -X POST \
'https://LAMBDA_ENDPOINT.us-east-2.<CLOUDHOST>.com/v1/<?HOOK>' \
-H 'content-type: application/json' \
-H 'Authorization: <token>' \
-d '{"body": "{"id": 152948599,"version_id": 1856687097,"text": "bWFya2V0IGVudHJ5IGZvciBFdXJvcGVhbiBkYWlyeSBwcm9kdWNlciBpbiBVQUU=","timestamp": "1702307960","sender": "user","metadata": {"conversationTopic": "TmV3IENoYXQ=","tool": ["Y2hhdGJvdA==","aW5zdHJ1Y3Rpb24=","dG9uZQ==","bGVuZ3Ro"],"reference": ["Z3B0My41LXR1cmJv","cHJvZmVzc2lvbmFs","cHJvZmVzc2lvbmFs","c2hvcnQ="],"token_cost": 2138,"rating": 1}}"}'
```




@JavaScript [ECMA 2.0]
```
const url = "https://LAMBDA_ENDPOINT.us-east-2.<CLOUDHOST>.com/v1/<?HOOK>";

const payload = {
  body: {
    id: 152948599,
    version_id: 1856687097,
    text: "bWFya2V0IGVudHJ5IGZvciBFdXJvcGVhbiBkYWlyeSBwcm9kdWNlciBpbiBVQUU=",
    timestamp: "1702307960",
    sender: "user",
    metadata: {
      conversationTopic: "TmV3IENoYXQ=",
      tool: ["Y2hhdGJvdA==", "aW5zdHJ1Y3Rpb24=", "dG9uZQ==", "bGVuZ3Ro"],
      reference: ["Z3B0My41LXR1cmJv", "cHJvZmVzc2lvbmFs", "cHJvZmVzc2lvbmFs", "c2hvcnQ="],
      token_cost: 2138,
      rating: 1
    }
  }
};

const res = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "<token>"
  },
  body: JSON.stringify(payload)
});

const data = await res.json();
console.log(data);
```






@XNU-Like BSD Distributuons [Async/Await Swift 4.0]
```
import Foundation

let url = URL(string: "https://LAMBDA_ENDPOINT.us-east-2.<CLOUDHOST>.com/v1/<?HOOK>")!

let payload: [String: Any] = [
    "body": [
        "id": 152948599,
        "version_id": 1856687097,
        "text": "bWFya2V0IGVudHJ5IGZvciBFdXJvcGVhbiBkYWlyeSBwcm9kdWNlciBpbiBVQUU=",
        "timestamp": "1702307960",
        "sender": "user",
        "metadata": [
            "conversationTopic": "TmV3IENoYXQ=",
            "tool": ["Y2hhdGJvdA==","aW5zdHJ1Y3Rpb24=","dG9uZQ==","bGVuZ3Ro"],
            "reference": ["Z3B0My41LXR1cmJv","cHJvZmVzc2lvbmFs","cHJvZmVzc2lvbmFs","c2hvcnQ="],
            "token_cost": 2138,
            "rating": 1
        ]
    ]
]

var request = URLRequest(url: url)
request.httpMethod = "POST"
request.setValue("application/json", forHTTPHeaderField: "Content-Type")
request.setValue("<token>", forHTTPHeaderField: "Authorization")
request.httpBody = try JSONSerialization.data(withJSONObject: payload)

let (data, _) = try await URLSession.shared.data(for: request)
print(String(data: data, encoding: .utf8)!)
```




@Rust (reqwest + serde idioms)
```
use reqwest::Client;
use serde::Serialize;

#[derive(Serialize)]
struct Metadata {
    conversationTopic: String,
    tool: Vec<String>,
    reference: Vec<String>,
    token_cost: u32,
    rating: u8,
}

#[derive(Serialize)]
struct Body {
    id: u64,
    version_id: u64,
    text: String,
    timestamp: String,
    sender: String,
    metadata: Metadata,
}

#[derive(Serialize)]
struct Payload {
    body: Body,
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = Client::new();

    let payload = Payload {
        body: Body {
            id: 152948599,
            version_id: 1856687097,
            text: "bWFya2V0IGVudHJ5IGZvciBFdXJvcGVhbiBkYWlyeSBwcm9kdWNlciBpbiBVQUU=".into(),
            timestamp: "1702307960".into(),
            sender: "user".into(),
            metadata: Metadata {
                conversationTopic: "TmV3IENoYXQ=".into(),
                tool: vec!["Y2hhdGJvdA==".into(), "aW5zdHJ1Y3Rpb24=".into(), "dG9uZQ==".into(), "bGVuZ3Ro".into()],
                reference: vec!["Z3B0My41LXR1cmJv".into(), "cHJvZmVzc2lvbmFs".into(), "cHJvZmVzc2lvbmFs".into(), "c2hvcnQ=".into()],
                token_cost: 2138,
                rating: 1,
            },
        },
    };

    let res = client
        .post("https://LAMBDA_ENDPOINT.us-east-2.<CLOUDHOST>.com/v1/<?HOOK>")
        .header("Authorization", "<token>")
        .json(&payload)
        .send()
        .await?;

    println!("{:?}", res.text().await?);

    Ok(())
}

```





@GoLang (gopher/net/http idioms)
```
package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	url := "https://LAMBDA_ENDPOINT.us-east-2.<CLOUDHOST>.com/v1/<?HOOK>"

	payload := map[string]interface{}{
		"body": map[string]interface{}{
			"id":         152948599,
			"version_id": 1856687097,
			"text":       "bWFya2V0IGVudHJ5IGZvciBFdXJvcGVhbiBkYWlyeSBwcm9kdWNlciBpbiBVQUU=",
			"timestamp":  "1702307960",
			"sender":     "user",
			"metadata": map[string]interface{}{
				"conversationTopic": "TmV3IENoYXQ=",
				"tool":              []string{"Y2hhdGJvdA==", "aW5zdHJ1Y3Rpb24=", "dG9uZQ==", "bGVuZ3Ro"},
				"reference":         []string{"Z3B0My41LXR1cmJv", "cHJvZmVzc2lvbmFs", "cHJvZmVzc2lvbmFs", "c2hvcnQ="},
				"token_cost":        2138,
				"rating":            1,
			},
		},
	}

	jsonData, _ := json.Marshal(payload)

	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(jsonData))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "<token>")

	client := &http.Client{}
	resp, _ := client.Do(req)

	defer resp.Body.Close()
	fmt.Println(resp.Status)
}

```



CUDA C (host-side HTTP via libcurl, on CUDA, only HOST-flagged coprophiliacs can raw-thrash that ass)
```
#include <curl/curl.h>

int main() {
    CURL *curl = curl_easy_init();

    if(curl) {
        curl_easy_setopt(curl, CURLOPT_URL, "https://LAMBDA_ENDPOINT.us-east-2.<CLOUDHOST>.com/v1/<?⚡HOOK>");⚡

        struct curl_slist *headers = NULL;
        headers = curl_slist_append(headers, "Content-Type: application/json");
        headers = curl_slist_append(headers, "Authorization: <token>");

        const char *json =
            "{\"body\":{\"id\":152948599,\"version_id\":1856687097,"
            "\"text\":\"bWFya2V0...\",\"timestamp\":\"1702307960\","
            "\"sender\":\"user\"}}";

        curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
        curl_easy_setopt(curl, CURLOPT_POSTFIELDS, json);

        curl_easy_perform(curl);
        curl_easy_cleanup(curl);
    }
}

```



Ruby on Rails (Net::HTTP built-in idiom) 
```
require "net/http"
require "json"

uri = URI("https://LAMBDA_ENDPOINT.us-east-2.<CLOUDHOST>.com/v1/<?HOOK>")

payload = {
  body: {
    id: 152948599,
    version_id: 1856687097,
    text: "bWFya2V0IGVudHJ5IGZvciBFdXJvcGVhbiBkYWlyeSBwcm9kdWNlciBpbiBVQUU=",
    timestamp: "1702307960",
    sender: "user",
    metadata: {
      conversationTopic: "TmV3IENoYXQ=",
      tool: ["Y2hhdGJvdA==","aW5zdHJ1Y3Rpb24=","dG9uZQ==","bGVuZ3Ro"],
      reference: ["Z3B0My41LXR1cmJv","cHJvZmVzc2lvbmFs","cHJvZmVzc2lvbmFs","c2hvcnQ="],
      token_cost: 2138,
      rating: 1
    }
  }
}

http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

request = Net::HTTP::Post.new(uri)
request["Content-Type"] = "application/json"
request["Authorization"] = "<token>"
request.body = payload.to_json

response = http.request(request)
puts response.body

```






