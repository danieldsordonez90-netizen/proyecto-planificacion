# Author: jose.inestroza@unah.edu.hn
# Modified by: Iván, Daniels, Christian
# Version: 0.1.0

import sys

# Definición de propiedades para la entidad de estudiantes
keys = [
    "student_id",
    "student_name",
    "student_email",
    "student_career",
    "student_academic_average"
]

read_data = lambda: [line for line in str(sys.stdin.read()).strip().split("\n") if line.strip()]
process_item = lambda text: str(text).strip().split(",")

process_data = lambda array, keys: [
    {
        f"{keys[i]}": f"{process_item(item)[i]}" for i in range(len(keys))
    }
    for item in array
]

# Imprime el resultado transformado listo para el parseo de PHP
print(
    process_data(
        read_data(),
        keys
    )
)