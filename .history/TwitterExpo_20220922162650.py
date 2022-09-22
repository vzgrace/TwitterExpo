import requests
import os
import json
from google.cloud import language

# To set your enviornment variables in your terminal run the following line:
# export 'BEARER_TOKEN'='<your_bearer_token>'
bearer_token = os.environ.get("BEARER_TOKEN")

def analyze_text_sentiment(text):
    client = language.LanguageServiceClient()
    document = language.Document(content=text, type_=language.Document.Type.PLAIN_TEXT)

    response = client.analyze_sentiment(document=document)

    sentiment = response.document_sentiment
    results = dict(
        text=text,
        score=f"{sentiment.score:.1%}",
        magnitude=f"{sentiment.magnitude:.1%}",
    )
    for k, v in results.items():
        print(f"{k:10}: {v}")

def create_UserLookup_url(usernames):
    # Specify the usernames that you want to lookup below
    # You can enter up to 100 comma-separated values.
    #usernames = "usernames=TwitterDev,TwitterAPI"

    #usernames = input("Enter username(s) separated by commas: ")
    #addition = "usernames="
    #usernames = addition + usernames

    user_fields = "user.fields=description,created_at"
    # User fields are adjustable, options include:
    # created_at, description, entities, id, location, name,
    # pinned_tweet_id, profile_image_url, protected,
    # public_metrics, url, username, verified, and withheld
    url = "https://api.twitter.com/2/users/by?{}&{}".format(usernames, user_fields)
    return url

def create_TweetLookup_url():
    tweet_fields = "tweet.fields=created_at,author_id,text"
    # Tweet fields are adjustable.
    # Options include:
    # attachments, author_id, context_annotations,
    # conversation_id, created_at, entities, geo, id,
    # in_reply_to_user_id, lang, non_public_metrics, organic_metrics,
    # possibly_sensitive, promoted_metrics, public_metrics, referenced_tweets,
    # source, text, and withheld

    #ids = "ids=1278747501642657792,1255542774432063488"
    ids = "ids=1278747501642657792"
    # You can adjust ids to include a single Tweets.
    # Or you can add to up to 100 comma-separated IDs
    url = "https://api.twitter.com/2/tweets?{}&{}".format(ids, tweet_fields)
    return url

def get_params():
    # Tweet fields are adjustable.
    # Options include:
    # attachments, author_id, context_annotations,
    # conversation_id, created_at, entities, geo, id,
    # in_reply_to_user_id, lang, non_public_metrics, organic_metrics,
    # possibly_sensitive, promoted_metrics, public_metrics, referenced_tweets,
    # source, text, and withheld
    return {"tweet.fields": "created_at"}

def bearer_oauth(r):
    """
    Method required by bearer token authentication.
    """

    r.headers["Authorization"] = f"Bearer {bearer_token}"
    r.headers["User-Agent"] = "v2UserLookupPython"
    return r


def connect_to_endpoint(url):
    response = requests.request("GET", url, auth=bearer_oauth,)
    print(response.status_code)
    if response.status_code != 200:
        raise Exception(
            "Request returned an error: {} {}".format(
                response.status_code, response.text
            )
        )
    return response.json()

def parse_json(json_response, X):
    dump_file = json.dumps(json_response, sort_keys=True)
    return var

def create_Timeline_url():
    user_id = 2244994945
    return "https://api.twitter.com/2/users/{}/tweets".format(user_id)


def main():
    usernames = input("Enter username(s) separated by commas. Enter 'N' to use default usernames: ")
    if usernames == "N":
        usernames = "TwitterDev,Twitter"
    addition = "usernames="
    usernames = addition + usernames
    #Userurl = create_UserLookup_url(usernames)
    Tweeturl = create_TweetLookup_url()
    #Timelineurl = create_Timeline_url()
    #json_response = connect_to_endpoint(Userurl)
    #print(json.dumps(json_response, indent=4, sort_keys=True))
    json_response = connect_to_endpoint(Tweeturl)
    #print(json.dumps(json_response, indent=4, sort_keys=True)) 
    dump_file = json.dumps(json_response, indent=4, sort_keys=True)



if __name__ == "__main__":
    main()