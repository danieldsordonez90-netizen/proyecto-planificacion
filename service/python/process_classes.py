# Author: jose.inestroza@unah.edu.hn
# Modified by: ivan.diaz@unah.hn, danields.olivares@unah.hn, christian.vijil@unah.hn
# Version: 0.1.0

import sys

# Definición de propiedades para la entidad de materias
keys = [
    "materia_codigo",
    "materia_nombre",
    "materia_uv",
    "materia_prerrequisitos"
]

read_data = lambda: [line for line in str(sys.stdin.read()).strip().split("\n") if line.strip()]
process_item = lambda text: str(text).strip().split(",")

process_data = lambda array, keys: [
    {
        f"{keys[i]}": f"{process_item(item)[i]}" for i in range(len(keys))
    }
    for item in array
]

# Imprime el resultado transformado asegurando el formato compatible con fixJson
print(
    str(
        process_data(
            read_data(),
            keys
        )
    ).replace("'", '"')
)