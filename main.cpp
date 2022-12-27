#include <iostream>
using namespace std;
int fib(int n)
{
    if (n <= 1)
        return n;
    return fib(n - 1) + fib(n - 2);
}

int main()
{
    int a;
    cin >> a;

    while (a <= 0 || a > 20)
    {
        cin >> a;
    }
    cout << fib(a - 1) << "\nMarek Pieczykolan \nGrupa dziekanska nr 2.3\n";
    
    system("pause");
    return 0;
}