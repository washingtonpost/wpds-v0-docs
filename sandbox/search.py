import requests

c: bool = True
seen: list = []

while c:
    org = input("Which org would you like to search? ")
    code = input("Which code would you like to match? ")
    file = input("Which file name would you like to search? ")

    url = f"https://api.github.com/search/code?q={code}+user:{org}+filename:{file}"

    response = requests.get(url=url, headers={'Authorization': 'Bearer [TOKEN]'})
    print(f"The status code of this request is: {response.status_code}\n")

    json_response = response.json()
    response.close()
    items = json_response["items"]

    count: int = 0
    for item in items:
        if item['repository']['name'] not in seen:
            print(f"Repository {count} using '{code}' in org '{org}': {item['repository']['name']}")
            count += 1
            seen.append(item['repository']['name'])
    if count == 0:
        print(f"NO repositories found using '{code}' in org '{org}'")
    
    c2 = input("\nWould you like to continue? ")
    if c2.lower() == "no":
        c = False
    seen = []