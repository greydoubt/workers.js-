
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








