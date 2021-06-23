using OI.Sample.API.Entities;
using OI.Sample.API.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace OI.Sample.API.Services
{
    public class CreateFile : ICreateFile
    {
        public void CreateAndWriteFile(Data data)
        {
            var filepath = Path.Combine(Directory.GetCurrentDirectory(), "Content","Data.txt");

            using(StreamWriter DataWriter = System.IO.File.AppendText(filepath))
            {
                DataWriter.WriteLine("Name: " + data.Name);
                DataWriter.WriteLine("Number:" + data.Number);
                DataWriter.WriteLine("Cords" + data.cords);
                DataWriter.WriteLine(" ");
                DataWriter.Close();
            }
            
        }
    }
}
