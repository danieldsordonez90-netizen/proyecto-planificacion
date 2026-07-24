# Author: jose.inestroza@unah.edu.hn
# Modified by: ivan.diaz@unah.hn, danields.olivares@unah.hn, christian.vijil@unah.hn
# Version: 0.1.0

import sys

keys = [
    "estudiante_cuenta",
    "estudiante_name"
]

read_data = lambda: [line for line in str(sys.stdin.read()).strip().split("\n") if line.strip()]
process_item = lambda text: str(text).strip().split(",")

process_data = lambda array, keys: [
    {
        keys[i]: values[i] 
        for i in range(min(len(keys), len(values)))
    }
    for item in array
    for values in [process_item(item)]
]

# Convertimos la estructura a JSON manual sin comillas simples de Python
data = process_data(read_data(), keys)

# Formateo a JSON manual string
json_items = [
    '{"estudiante_cuenta":"' + item.get("estudiante_cuenta", "") + '","estudiante_name":"' + item.get("estudiante_name", "") + '"}'
    for item in data
]

print("[" + ",".join(json_items) + "]")