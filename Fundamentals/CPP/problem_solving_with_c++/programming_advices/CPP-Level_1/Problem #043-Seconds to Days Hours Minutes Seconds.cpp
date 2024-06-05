#include <iostream>
#include <string>
using namespace std;


struct strTaskDuration
{
    int NumberOfDays, NumberOfHours, NumberOfMinutes, NumberOfSeconds;
};

float ReadPositiveNumber(string Message)
{
    float Number;
    do 
    {
        cout << Message << endl;
        cin >> Number;

    } while (Number < 0);

    return Number;
}

strTaskDuration SecondsToTaskDuration( int TotalSeconds )
{
    strTaskDuration TaskDuration;

    const int SecondsPerDay = 24 * 60 * 60;
    const int SecondsPerHour = 60 * 60;
    const int SecondsPerMinute = 60;

    int Remainder = 0;


    TaskDuration.NumberOfDays = floor(TotalSeconds / SecondsPerDay);
    Remainder = TotalSeconds % SecondsPerDay;
    TaskDuration.NumberOfHours = floor(TotalSeconds / SecondsPerHour);
    Remainder = TotalSeconds % SecondsPerHour;
    TaskDuration.NumberOfMinutes = floor(TotalSeconds / SecondsPerMinute);
    Remainder = TotalSeconds % SecondsPerMinute;

    TaskDuration.NumberOfSeconds = Remainder;

    return TaskDuration;
}

void PrintTaskDurationDetails(strTaskDuration TaskDuration)
{
    cout << "\n";
    cout << TaskDuration.NumberOfDays << ":"
        << TaskDuration.NumberOfHours << ":"
        << TaskDuration.NumberOfMinutes << ":"
        << TaskDuration.NumberOfSeconds << "\n";
}


int main()
{
   int TotalSeconds = ReadPositiveNumber("Please Enter A Total Seconds");

   PrintTaskDurationDetails(SecondsToTaskDuration(TotalSeconds));

    return 0;
}
