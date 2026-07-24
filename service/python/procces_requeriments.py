import sys

keys = [
    "codigo",
    "requisitos"
]

read_data = lambda: [line for line in str(sys.stdin.read()).strip().split("\n") if line.strip()]

process_item = lambda text: [str(item).strip().strip("'") for item in str(text).strip().split(",")]

process_data = lambda array, keys: [
    "{" + ",".join([f'"{keys[i]}": "{process_item(item)[i]}"' for i in range(len(keys))]) + "}"
    for item in array
]

print(
    "[" + ",".join(process_data(read_data(), keys)) + "]"
)