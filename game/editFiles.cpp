#include <bits/stdc++.h>
#include <fstream>
#include <parseDataJSON.h>

using namespace std;

void setIO(string flag = ""){
	ios_base::sync_with_stdio(0);
	cin.tie(0);
	if (!file.empty()) {
		freopen((flag + ".in").c_str(), "r", stdin);
		freopen((flag + ".out").c_str(), "w", stdout);
	}
}

int main() {
	// create ofstream object and open file
    std::ofstream outFile(path);

	// check if file is successfully opened
    if (outFile.is_open()) {
        // write predefined string to file
        outFile << flag;

        // Close file
        outFile.close();

        cout << "File created and content written successfully." << endl;
    } else {
        cerr << "Error: Unable to open the file." << endl;
    }

    return 0;
}



