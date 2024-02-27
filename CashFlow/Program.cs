using CashFlow.Data;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using Microsoft.Extensions.Configuration;

using System.Numerics;
using Microsoft.Extensions.Logging.Configuration;
using NLog.Web;
using System.Reflection.Metadata;
using NLog;
using Microsoft.CodeAnalysis.Elfie.Serialization;
using Newtonsoft.Json.Linq;
using NLog.Layouts;
using NLog.Targets;
using NLog.Fluent;
using AutoMapper;
using CashFlow;
using CashFlow.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var configuration = new MapperConfiguration(cfg => cfg.AddProfile(new MappingProfile()));
var mapper = configuration.CreateMapper();
builder.Services.AddSingleton(mapper);


var logger = NLog.LogManager.Setup().LoadConfigurationFromAppSettings().GetCurrentClassLogger();
builder.Host.UseNLog();

var dbContext = builder.Services.AddDbContext<CashFlowContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("cnn")));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(options => options.WithOrigins("http://localhost:4200").AllowAnyMethod().AllowAnyHeader()); 

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();


app.Run();
