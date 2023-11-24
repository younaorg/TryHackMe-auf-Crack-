#include <bits/stdc++.h>
#include <nlohmann/json.hpp>

using json = nlohmann::json;
using namespace std;

int main(){
    try{
        // parse JSON
        auto parsed_json = json::parse(json_data);

        // accessing values
        string flag = parsed_json["flag"];
        string path = parsed_json["path"];

    } catch (const json::exception& e){
        std::cerr << "Error parsing JSON: " << e.what() << endl;
    }

    return 0;
}
