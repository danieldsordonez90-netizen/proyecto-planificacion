import sys

keys = [
    "codigo",
    "requisitos"
]

read_data = lambda: [line for line in str(sys.stdin.read()).strip().split("\n") if line.strip() and line.strip() != "Ninguno"]

process_item = lambda text: [str(item).strip().strip("'") for item in str(text).strip().split(",") if str(item).strip() not in ("", "Ninguno")]

process_data = lambda array, keys: [
    {
        f"{keys[0]}": f"{sys.argv[1]}",
        f"{keys[1]}": f"{req}"
    }
    for item in array for req in process_item(item)
]

print(
    str(
        process_data(
            read_data(),
            keys
        )
    ).replace("'", '"')
)