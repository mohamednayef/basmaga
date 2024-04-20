#include <iostream>
using namespace std;

int main() {
  for(int i=1; i<=40; i++) {
    cout << "q" << i << ": {\n";
    cout << "q: 'questoin" << i << "'," << endl;
    cout << "a: 'answer" << i << "'," << endl;
    cout << "b: 'answer" << i << "'," << endl;
    cout << "c: 'answer" << i << "'," << endl;
    cout << "d: 'answer" << i << "'" << endl;
    cout << "}," << endl;
  }


  return 0;
}