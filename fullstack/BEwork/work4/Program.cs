using System;
using System.Collections.Generic;

namespace work4
{
    public class states
    {
      public static void Main()
      {
          details D1=new details()
          {
              name="tamilnadu",
              population=157388

          };

          details D2=new details()
          {
              name="kerala",
              population=85227800
          };

          details D3=new details()
          {
              name="andhra",
              population=36445
          };



          List<details> detl=new List<details>();
          detl.Add(D1);
          detl.Add(D2);
          detl.Add(D3);

          foreach(details dt in detl)
          {
              Console.WriteLine("name = {1},   population={0}",dt.name,dt.population);
          }

      }

      public class details
      {
          public string name {get; set;}
          public int population{get;set;}
          
      }
    }
}
