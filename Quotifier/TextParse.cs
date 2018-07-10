using EnvDTE;
using EnvDTE80;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Quotifier
{
    public class TextParse
    {
        public static string Commafy(string selectedText)
        {
            var returnString = selectedText;

            if (selectedText != null && selectedText != String.Empty)
            {
                var commafied = new StringBuilder();
                foreach (var item in selectedText.Replace("\r", "").Split('\n'))
                {
                    var updatedItem = item;
                    if (item != string.Empty)
                    {
                        updatedItem = String.Format(@"{0}{1}", item, ",");
                    }
                    commafied.AppendLine(updatedItem);
                }

                returnString = commafied.ToString();                
            }

            return returnString;
        }

        public static string Quotify(string selectedText)
        {
            var returnString = selectedText;

            if (selectedText != null && selectedText != String.Empty)
            {
                var commafied = new StringBuilder();
                foreach (var item in selectedText.Replace("\r", "").Split('\n'))
                {
                    var updatedItem = item;
                    if (item != string.Empty)
                    {
                        updatedItem = String.Format(@"{0}{1}{2}", "\"", item, "\"");
                    }
                    commafied.AppendLine(updatedItem);
                }

                returnString = commafied.ToString();
            }

            return returnString;
        }
    }
}
