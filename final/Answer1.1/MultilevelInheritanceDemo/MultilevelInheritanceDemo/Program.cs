using System;

namespace MultilevelInheritanceDemo
{
    // Base class: Person
    public class Person
    {
        public string Name { get; set; }
        public int Age { get; set; }

        public Person(string name, int age)
        {
            Name = name;
            Age = age;
        }

        public virtual void DisplayDetails()
        {
            Console.WriteLine($"Name: {Name}, Age: {Age}");
        }
    }

    // Derived class: Student
    public class Student : Person
    {
        public int RollNumber { get; set; }
        public string Course { get; set; }

        public Student(string name, int age, int rollNumber, string course)
            : base(name, age)
        {
            RollNumber = rollNumber;
            Course = course;
        }

        public override void DisplayDetails()
        {
            base.DisplayDetails();
            Console.WriteLine($"Roll Number: {RollNumber}, Course: {Course}");
        }
    }

    // Derived class: GraduateStudent
    public class GraduateStudent : Student
    {
        public string ThesisTitle { get; set; }
        public int GraduationYear { get; set; }

        public GraduateStudent(string name, int age, int rollNumber, string course, string thesisTitle, int graduationYear)
            : base(name, age, rollNumber, course)
        {
            ThesisTitle = thesisTitle;
            GraduationYear = graduationYear;
        }

        public override void DisplayDetails()
        {
            base.DisplayDetails();
            Console.WriteLine($"Thesis Title: {ThesisTitle}, Graduation Year: {GraduationYear}");
        }
    }

    // Main Program
    class Program
    {
        static void Main(string[] args)
        {
            // Create an instance of GraduateStudent
            GraduateStudent gradStudent = new GraduateStudent(
                name: "Alice Johnson",
                age: 28,
                rollNumber: 101,
                course: "Computer Science",
                thesisTitle: "AI-Powered Healthcare Systems",
                graduationYear: 2023
            );

            // Display all properties of GraduateStudent
            Console.WriteLine("Graduate Student Details:");
            gradStudent.DisplayDetails();
        }
    }
}
