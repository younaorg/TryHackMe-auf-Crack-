#include <bits/stdc++.h>
#include <thread>
#include <chrono>
#include <parseDaraJSON.h>
#include <cpr.h>
#include <curl/curl.h>

using namespace std;

size_t WriteCallback(void* contents, size_t size, size_t nmemb, std::string* output) {
    size_t totalSize = size * nmemb;
    output->append(static_cast<char*>(contents), totalSize);
    return totalSize;
}

void sendPostRequest(int intervalSeconds){
    while(true){
        // send request to webserver
        // POST request

        // URL to send POST request
        const char* url = "https://example.com/api/endpoint";
    
        // initialize cURL
        CURL* curl = curl_easy_init();
        if (curl) {
            // set URL
            curl_easy_setopt(curl, CURLOPT_URL, url);

            // perform POST request
            CURLcode res = curl_easy_perform(curl);

            // errors
            if (res != CURLE_OK) {
                std::cerr << "cURL failed: " << curl_easy_strerror(res) << endl;
            } else {
                // print response
                cout << "Response:\n" << response << endl;
            }

            // cleanup
            curl_easy_cleanup(curl);
        } else {
            std::cerr << "Failed to initialize cURL." << endl;
        }
        this_thread::sleep_for(std::chrono::seconds(intervalSeconds));
    }
}

int main(int argc, char** argv) {
    // GET request
    auto response = cpr::Get(cpr::Url{"http://httpbin.org/get"});
    cout << "OK" << endl;

    // start a thread to call a function every few seconds
    std::thread t(sendPostRequest, "Pinging Server...", nextcheck);

    // keep the main thread running 
    for (int i = 0; i < 10; ++i) {
        std::this_thread::sleep_for(std::chrono::seconds(1));
        cout << "Main thread running..." << endl;
    }

    // join thread to avoid program termination before thread finishes
    t.join();

    return 0;
} 
