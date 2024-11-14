var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors();
var app = builder.Build();
app.UseCors(p =>
{
    p
    .AllowAnyHeader()
    .AllowAnyMethod()
    .AllowAnyOrigin();
});
app.MapGet("/", () => "Hello World!");

var filestring = "";

app.MapPost("/fileUpload", (FileUploadRequestBody body) =>
{
    filestring = body.Base64File;
});
app.MapGet("/file", () =>
{
    return filestring;
});

app.Run();


record FileUploadRequestBody(
    string Base64File, string Name
);




