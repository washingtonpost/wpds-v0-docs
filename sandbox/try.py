"""Helper code for determining if your auth code is working."""

import requests

url = "https://api.github.com/search/repositories?q=user:WPMedia"

response = requests.get(url=url, headers={'Authorization': 'Bearer [TOKEN]'})
print(f"The status code of this request is: {response.status_code}\n")
count = response.json()['total_count']
print(f"The amount of repos is: {count}")