# FibCalc

1. Aplikacja  
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
