using OI.Sample.API.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OI.Sample.API.Interfaces
{
   public interface ICreateFile
    {
        void CreateAndWriteFile(Data data);
    }
}
