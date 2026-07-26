import sys
lines = [line for line in sys.stdin.read().strip().split("\n") if line.strip()]

planes = []
for line in lines:
    numero, secciones = line.split("|")
    codigos = secciones.split(",")
    codigos_json = ",".join(['"' + c.strip() + '"' for c in codigos])
    planes.append('{"plan":' + numero + ',"secciones":[' + codigos_json + ']}')

print("[" + ",".join(planes) + "]")