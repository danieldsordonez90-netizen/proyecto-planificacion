# Author: jose.inestroza@unah.edu.hn
# Modified by: ivan.diaz@unah.hn, danields.olivares@unah.hn, christian.vijil@unah.hn
# Version: 0.1.0

import sys

# Definición de propiedades para las secciones
keys = [
    "seccion_codigo",
    "materia_codigo",
    "seccion_hora",
    "profesor_codigo",
    "Edificio_sección",
    "Aula_sección"
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