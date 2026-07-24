# Author: jose.inestroza@unah.edu.hn
# Modified by: ivan.diaz@unah.hn, danields.olivares@unah.hn, christian.vijil@unah.hn
# Version: 0.1.0

import sys

keys = [
    "estudiante_indice"
]

read_data = lambda: [line for line in str(sys.stdin.read()).strip().split("\n") if line.strip()]
process_item = lambda text: str(text).strip().split(",")

process_data = lambda array, keys: [
    {
        f"{keys[i]}": f"{process_item(item)[i]}" for i in range(len(keys))
    }
    for item in array
]

print(
    str(
        process_data(
            read_data(),
            keys
        )
    ).replace("'", '"')
)