# Setup

import datetime
import csv

# Find today's date

today = datetime.datetime.now()

print("Hello. I am Martin the Deficient Virtual Assistant. I have been programmed to say I hope you are well. Today's date is", today.strftime("%A"), today.strftime("%d"), today.strftime("%B,"), today.strftime("%Y"))

# Connect to album data set

data = csv.reader(open("album-anniversaries.csv"))

# Loop through album data set

total = 0
for row in data:
    total += 1
    release = datetime.datetime(int(row[3]), int(row[4]), int(row[5]))
    age = today.year - release.year

    if (age % 5 == 0) and (age > 0) and (release.strftime("%b") == today.strftime("%b")):
        print(row[1], "by", row[2], "turns", age, "this month. It was released on", release.strftime("%d"), release.strftime("%b,"), row[3])

# If count > 0, email a notification containing array 

print("As of today Audioxide has reviewed", total, "albums")