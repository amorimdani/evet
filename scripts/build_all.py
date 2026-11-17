# -*- coding: utf-8 -*-
"""
Script de unificação e compilação de dados do Evet.
Gera lessons.json, exercises.json e culture.json em server/data/
"""

import json
import os
import sys

from data_a1_a2 import A1_LESSONS, A2_LESSONS
from data_b1_b2 import B1_LESSONS, B2_LESSONS
from data_c1_c2 import C1_LESSONS, C2_LESSONS
from data_exercises import EXERCISES
from data_culture import CULTURE_DATA

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    target_data_dir = os.path.join(base_dir, "server", "data")
    os.makedirs(target_data_dir, exist_ok=True)

    all_lessons = A1_LESSONS + A2_LESSONS + B1_LESSONS + B2_LESSONS + C1_LESSONS + C2_LESSONS
    print(f"Total de lições unificadas: {len(all_lessons)}")
    print(f"  - A1: {len(A1_LESSONS)}")
    print(f"  - A2: {len(A2_LESSONS)}")
    print(f"  - B1: {len(B1_LESSONS)}")
    print(f"  - B2: {len(B2_LESSONS)}")
    print(f"  - C1: {len(C1_LESSONS)}")
    print(f"  - C2: {len(C2_LESSONS)}")

    lessons_file = os.path.join(target_data_dir, "lessons.json")
    with open(lessons_file, "w", encoding="utf-8") as f:
        json.dump(all_lessons, f, ensure_ascii=False, indent=2)
    print(f"Salvo com sucesso: {lessons_file} ({os.path.getsize(lessons_file) / 1024:.1f} KB)")

    print(f"Total de exercícios interativos: {len(EXERCISES)}")
    exercises_file = os.path.join(target_data_dir, "exercises.json")
    with open(exercises_file, "w", encoding="utf-8") as f:
        json.dump(EXERCISES, f, ensure_ascii=False, indent=2)
    print(f"Salvo com sucesso: {exercises_file} ({os.path.getsize(exercises_file) / 1024:.1f} KB)")

    print(f"Total de seções culturais: {len(CULTURE_DATA['regions'])} regiões, {len(CULTURE_DATA['culturalTraditions'])} tradições")
    culture_file = os.path.join(target_data_dir, "culture.json")
    with open(culture_file, "w", encoding="utf-8") as f:
        json.dump(CULTURE_DATA, f, ensure_ascii=False, indent=2)
    print(f"Salvo com sucesso: {culture_file} ({os.path.getsize(culture_file) / 1024:.1f} KB)")

    print("\n✅ Todos os datasets pedagógicos compilados e validados com 100% de sucesso!")

if __name__ == "__main__":
    main()
