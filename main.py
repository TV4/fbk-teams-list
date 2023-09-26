import csv
import json

with open("teams.json", "r") as read_it:
    data = json.load(read_it)


data_file = open('teams.csv', 'w')

# create the csv writer object
csv_writer = csv.writer(data_file)

count = 0

for emp in data:
    if count == 0:
        # Writing headers of CSV file
        header = emp.keys()
        csv_writer.writerow(header)
        count += 1

    # Writing data of CSV file
    csv_writer.writerow(emp.values())

data_file.close()
