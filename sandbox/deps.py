import requests

c: bool = True

deps_count: dict = {}

while c:
    org = input("\nWhich org would you like to search? ")
    code = input("Which dependency are you looking for? ")
    
    # file = input("Which file name would you like to search? ")
    url = f"https://api.github.com/search/code?q={code}+user:{org}+filename:package.json"

    response = requests.get(url=url, headers={'Authorization': 'Bearer [TOKEN]'})
    print(f"The status code of this request is: {response.status_code}\n")

    json_response = response.json()
    response.close()
    items = json_response["items"]
    if code == "wpds-ui-kit":
        code = '@washingtonpost/wpds-ui-kit'

    i: int = 0
    for x in items:
        partial_url = x["html_url"].removeprefix("https://github.com/").replace("blob/", "")
        full_url = "https://raw.githubusercontent.com/" + partial_url
        response2 = requests.get(full_url)
        json_response2 = response2.json()
        response2.close()
        repo = x["repository"]["name"]
        # print(json_response2['dependencies']['@washingtonpost/wpds-ui-kit'])
        # break

        try:
            if code in json_response2['dependencies']:
                dep = json_response2['dependencies'][code]
                print(full_url)
                print(f"In repository {repo}: ")
                print(f"{dep}\n")
                version = str(dep).replace("v", "").replace("^", "")
                if version in deps_count:
                    deps_count[version] += 1
                else:
                    deps_count[version] = 1
            elif code in json_response2['devDependencies']:
                dep = json_response2['devDependencies'][code]
                print(full_url)
                print(f"In repository {repo}: ")
                print(f"{dep}\n")
                version = str(dep).replace("v", "").replace("^", "")
                if version in deps_count:
                    deps_count[version] += 1
                else:
                    deps_count[version] = 1
        except KeyError:
            continue

    c2 = input("\nWould you like to continue? ")
    if c2.lower() == "no":
        c = False

print(deps_count)