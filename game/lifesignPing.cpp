#include <bits/stdc++.h>
#include <thread>
#include <chrono>

using namespace std;

/*void outputStringPeriodically(const std::string& str, int intervalSeconds) {
    while (true) {
        cout << str << endl;
        this_thread::sleep_for(std::chrono::seconds(intervalSeconds));
    }
}*/

void sendRequest(, int intervalSeconds){
    while(true){
        // send request to webserver

        this_thread::sleep_for(std::chrono::seconds(intervalSeconds));
    }
}

int main() {
    // start a thread to call a function every few seconds
    std::thread t(outputStringPeriodically, "Pinging Server...", 60);

    // keep the main thread running 
    for (int i = 0; i < 10; ++i) {
        std::this_thread::sleep_for(std::chrono::seconds(1));
        cout << "Main thread running..." << endl;
    }

    // join thread to avoid program termination before thread finishes
    t.join();

    return 0;
} 
