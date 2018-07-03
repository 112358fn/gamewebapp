#!/usr/bin/env python3
from random import random
import qrcode
import json

cur_amount_of_ran_num = 0
amount_of_ran_num = 30
while  cur_amount_of_ran_num < amount_of_ran_num:
    ran_nums = set([int((random()+1)*1000) for _ in range(30)])
    cur_amount_of_ran_num = len(ran_nums)

entries = []
for id in ran_nums:
    entry =  {
        "model": "leads.team",
        "pk": id,}
    entry['fields'] = {
            "name": "A team",
            "responsible": "John Doe",
            "created_at": "2018-07-3 13:37:00",
            "activated": False}
    entries.append(entry)
    activation_url = f"http://174.138.11.98/activate/{id}/"
    img = qrcode.make(activation_url)
    img.save(f'qr/{id}.png')
    print(entry)
    
with open('teams.json', 'w') as f:
    json.dump(entries, f, indent=4)

