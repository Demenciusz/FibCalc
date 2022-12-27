# FibCalc

1. Aplikacja  
   Stworzono aplikację do wyznaczania n-tego elementu ciagu. Wyniki działąnia aplikacji są podane po wykonaniu już kroku drugiego.

   ![Wynik działania aplikacji](zad.png)

2. Obraz
   Budowa obrazu

```
docker build -t zad:v1 .
```

Uruchomienie kontenera

```
docker run -i -a stdout -a stdin zad:v1
```

![Wynik uruchimienia](wynik.png)

3. fib.yml
   Stworzono fib.yml w .github/workflows, z akcjami github. Wraz ze stworzeniem tego pliku należało stworzyć tokeny aby umożliwić wykonianie wyszystkich akcji takich jak logowanie do dockerhuba, logowanie do ghcr, uzyskanie meta danych, dodanie tagów oraz ścieżki do przechowywanej pamięci podręcznej
4. GH
   Wynik komendy gh workflow list

![Wynik gh](ghlist.png)

Wykonanie workflowów

![Wykonanie](wyk.png)

![Wykonanie](g0.png)

![Wykonanie](g1.png)

![Wykonanie](g2.png)

Pull obrazu z repozytorium

![Wykonanie](g4.png)

![Wykonanie](g5.png)
