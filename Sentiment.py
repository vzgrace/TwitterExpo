'''
This is authentication for the google natual language processing api

First download the google cloud CLI (SDK, Docs, Install)

Create credential file: gcloud auth application-default login

Project ID: proud-curve-363319

Enable apis: gcloud services enable language.googleapis.com
https://codelabs.developers.google.com/codelabs/cloud-natural-language-python3#4
'''
from google.cloud import language


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

text = "Guido van Rossum is great!"
analyze_text_sentiment(text)