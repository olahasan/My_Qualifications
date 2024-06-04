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

strTaskDuration ReadstrTaskDuration()
{
    strTaskDuration TaskDuration;

    TaskDuration.NumberOfDays = ReadPositiveNumber("Please Enter A number Of Days");
    TaskDuration.NumberOfHours = ReadPositiveNumber("Please Enter A number Of Hours");
    TaskDuration.NumberOfMinutes = ReadPositiveNumber("Please Enter A number Of Minutes");
    TaskDuration.NumberOfSeconds = ReadPositiveNumber("Please Enter A number Of Seconds");

    return TaskDuration;
}

int TaskDurationInSecond(strTaskDuration TaskDuration)
{
    int DurationInSecond = 0;

    DurationInSecond = TaskDuration.NumberOfDays * 24 * 60 * 60;
    DurationInSecond += TaskDuration.NumberOfHours * 60 * 60;
    DurationInSecond += TaskDuration.NumberOfMinutes * 60;
    DurationInSecond += TaskDuration.NumberOfSeconds;

    return DurationInSecond;
}



int main()
{
   
    cout << "\nTask Duration In Second: =  " << TaskDurationInSecond(ReadstrTaskDuration()) << endl;
    cout << endl;
   
    return 0;
}
